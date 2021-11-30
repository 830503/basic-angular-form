export class Friend {
    firstName: string;
    lastName: string;
    email: string;
    telephone: number;
    language: string;

    public constructor(
        firstName: string,
        lastName: string,
        email: string,
        telephone: number,
        language: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
        this.language = language;

    }
}
