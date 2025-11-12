// Post Interface representing a post object
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// User Interface representing a user object
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


// Post Data Interface for creating or updating posts
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

// Props for Post Modal Component
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// User Data Interface for creating or updating users
export interface UserData {
  id?: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  companyName: string; 
}

//User Data Interface for creating or updating users
export interface UserData {
    id?: number;
    name: string;
    username: string;
    email: string;
}

// Props for User Modal Component
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}



// Welcome Interface representing the structure of user data
export interface Welcome { 
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

// Address Interface representing the structure of address data
export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

// Geo Interface representing geographical coordinates
export interface Geo {
    lat: string;
    lng: string;
}

// Company Interface representing the structure of company data
export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}


// UserData based on the simplest editable fields
export interface UserData {
    id?: number;
    name: string;
    username: string;
    email: string;
}

// UserModalProps defines the required functions for the modal
export interface UserModalProps {
    onClose: () => void;
    onSubmit: (user: UserData) => void;
}