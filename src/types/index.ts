export interface UserProps{ // User properties when getting user (src: https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28)
    nick: string;
    name: string;
    avatar: string;
    url: string;
    followers: string;
    following: string;
    repos_url: string;
    num_repos: string;
    repos: UserRepoProps[];
    email: string;
    bio: string;

}

export interface TopProps{
    setUser: (user:UserProps | null) => void;
}

export interface UserData{  //Get user data properties
    user: UserProps;
}

export interface UserRepoProps{
    name: string;
    description: string;
    forks: string;
    language: string;
    license: string;
    html_url: string;
}

