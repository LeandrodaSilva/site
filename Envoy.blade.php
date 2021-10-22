@servers(['web' => 'leandro@165.227.84.203'])

@setup
    $repository = 'git@github.com:LeandrodaSilva/site.git';
    $releases_dir = '/var/www/site/'.$branch.'/releases';
    $app_dir = '/var/www/site/'.$branch;
    $release = date('YmdHis');
    $new_release_dir = $releases_dir .'/'. $release;
@endsetup

@story('deploy')
    clone_repository
    install
    build
    update_symlinks
@endstory

@task('clone_repository')
    echo 'Cloning repository'
    [ -d {{ $releases_dir }} ] || mkdir {{ $releases_dir }}
    git clone --origin {{ $branch }} --depth 1 {{ $repository }} {{ $new_release_dir }}
    cd {{ $new_release_dir }}
    git reset --hard {{ $commit }}
@endtask

@task('install')
    echo "Running npm ({{ $release }})"
    cd {{ $new_release_dir }}
    npm install
@endtask

@task('build')
    echo "Running build ({{ $release }})"
    cd {{ $new_release_dir }}
    npm run build
    npm run export
@endtask

@task('update_symlinks')
    echo 'Linking current release'
    ln -nfs {{ $new_release_dir }} {{ $app_dir }}/current
@endtask