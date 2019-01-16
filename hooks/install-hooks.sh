#!/bin/bash
declare home=`pwd`
declare hooks_path=$home/hooks
declare git_hooks_path=$home/.git/hooks/
declare -a hook_files=('pre-commit')

echo "##############################################"
echo "Installing git hooks..."

for file in "${hook_files[@]}"
do
    echo "Creating symlink to $file in the .git/hooks folder"
    chmod +x $hooks_path/$file
    rm -f $git_hooks_path/$file

    # Employing an absolute path solves the issue of too many levels of symbolic links
    ln -s $hooks_path/$file $git_hooks_path
done
echo "##############################################"
