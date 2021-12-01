export class Friend {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    language: string;

    public constructor(
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        language: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
        this.language = language;

    }
}
