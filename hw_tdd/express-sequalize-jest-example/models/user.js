module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('user', {
        username: {
          type: dataTypes.STRING,
        },
        password: {
          type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        member_no: {
            type: dataTypes.STRING,
        },
    })

    return User
}