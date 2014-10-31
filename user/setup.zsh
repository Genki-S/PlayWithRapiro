# this file is meant to be sourced from a user's interactive zshell.

# Preparation
autoload -Uz add-zsh-hook

# Environment variables
PWRAPIRO_SERVER_HOST="http://192.168.1.239:8888"

# Hooks
function _pwrapiro_post_command_failure() {
  if [ $? -ne 0 ]; then
    curl $PWRAPIRO_SERVER_HOST
  fi
}
add-zsh-hook precmd _pwrapiro_post_command_failure
