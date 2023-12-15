export interface UserProps{ // User properties when getting user (src: https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28)
    nick: string;
    name: string;
    avatar: string;
    url: string;
    followers: string;
    following: string;
    repos: string;
    email: string;
    bio: string;
}

export interface TopProps{
    setUser: (user:UserProps | null) => void;
}

export interface UserData{  //Get user data properties
    user: UserProps;
}