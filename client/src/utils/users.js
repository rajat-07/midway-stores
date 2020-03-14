const users= []

const addUser = (id , username , email, password)=>{
    //Clean the data
    // username = username.trim().toLowerCase()
    // room = room.trim().toLowerCase()

    //Validate the data
    if(!username || !password){
        return {
            error : "Username and password are required !"
        }
    }

    //Check for existing users
    const existingUser = users.find((user)=>{
        return user.username === username
    })

    if(existingUser){
        return {
            error : "Username is aldready in use !"
        }
    }

    //Storing valid users
    const user = {id , username , email, password }
    users.push(user)
    // console.log(users);
    // return { user }
}

module.exports = {
    users,
    addUser
}