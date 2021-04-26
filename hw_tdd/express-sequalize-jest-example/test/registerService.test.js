const registerService = require('../services/register_service')();
const db = {
    user: {
        create: () => {
            return {
                id: 2
            }
        }
    }
}

test('Username is not empty string', async () => {
    const data = await registerService.userCreate(db, 'myUsername', 'password', 'password', 'ema@il', 'ema@il', 'P23456');
    // console.log(data)
    expect(data.username).not.toEqual('')
    expect(data.username).toBeDefined()
})


test('UserId is difined', async () => {
    const data = await registerService.userCreate(db, 'myUsername', 'password', 'password', 'ema@il', 'ema@il', 'P23456');
    // console.log(data)
    expect(data.userId).toBeDefined()
})

test('If user input is empty, username,  errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, '', 'password', 'confirm_password', 'email', 'confirm_email', 'P23456');

    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('If user input is empty, password,  errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, 'myUsername', '', 'confirm_password', 'email', 'confirm_email', 'P23456');

    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('If user input is empty, confirm_password,  errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, 'myUsername', 'password', '', 'email', 'confirm_email', 'P23456');

    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('If user input is empty, email,  errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, 'myUsername', 'password', 'confirm_password', '', 'confirm_email', 'P23456');

    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('If user input is empty, confirm_email,  errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, 'myUsername', 'password', 'confirm_password', 'email', '', 'P23456');

    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('If user input is empty, member_no,  errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, 'myUsername', 'password', 'confirm_password', 'email', 'confirm_email', '');
    // console.log(data)
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('Password and confirm_password is not match,  errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, 'myUsername', 'password', 'confirm_password', 'email', 'confirm_email', 'P23456');
    // console.log(data)
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('Email and confirm_email is not match,  errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, 'myUsername', 'password', 'password', 'email', 'confirm_email', 'P23456');
    // console.log(data)
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})


test('If email does not have assign sign, errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, 'myUsername', 'password', 'password', 'email', 'email', 'P23456');
    // console.log(data)
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})

test('If member_no is in the wrong format, errorMessage should be set', async () => {
    const data = await registerService.userCreate(db, 'myUsername', 'password', 'password', 'email@', 'email@', '123456');
    // console.log(data)
    expect(data.errorMessage).toBeDefined()
    expect(data.errorMessage).not.toEqual('')
})


