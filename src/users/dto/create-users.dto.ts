export class CreateUsersDto {
    readonly username: string
    readonly email: string
    readonly password: string
    readonly date_created: string
    readonly buy_list: []
    readonly role: string
}