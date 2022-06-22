import userbase from "userbase-js";

const insertItem = (date, exercise, muscleType, sets, sumKg, maxKg) => {
    userbase.insertItem({
        databaseName: 'gym',
        item: {
            date: date,
            exercise: exercise,
            muscleType: muscleType,
            sets: sets,
            sumKg: sumKg,
            maxKg: maxKg
        }
    })
}

export const endExercise = async (date, exercise, muscleType, sets, sumKg, maxKg) => {
    await userbase.init({appId: 'bb62abb4-cad7-4a4f-8a96-fe113596ed70'})
        .then(async () =>
            await userbase.signIn({
                username: 'igor',
                password: 'igor12'
            }))
        .then(async () => userbase.openDatabase({
            databaseName: 'newGym', changeHandler: function () {
            }
        }))
        .then(async () =>
            await userbase.insertItem({
                databaseName: 'newGym',
                item: {
                    date: date,
                    exercise: exercise,
                    muscleType: muscleType,
                    sets: sets,
                    sumKg: sumKg,
                    maxKg: maxKg
                }
            }))
        .then(async () =>
            await userbase.signOut())
}
export const getExercise = async () => {
    return new Promise(async (resolve) => {
        await userbase.init({appId: 'bb62abb4-cad7-4a4f-8a96-fe113596ed70'})
            .then(async () =>
                await userbase.signIn({
                    username: 'igor',
                    password: 'igor12'
                }))
            .then(async () =>
                await userbase.openDatabase({
                    databaseName: 'newGym',
                    changeHandler: async function (items) {
                        {
                            return resolve(items);
                        }
                    }
                }))
            .then(async () =>
                await userbase.signOut())

    })
}

export const exit = () => {
    userbase.init({appId: 'bb62abb4-cad7-4a4f-8a96-fe113596ed70'}).then(() =>
        userbase.signOut())
}

export const signIn = () => {
    userbase.init({appId: 'bb62abb4-cad7-4a4f-8a96-fe113596ed70'})
        .then(() =>
            userbase.signIn({
                username: 'igor',
                password: 'igor12'
            }))
}

export const signUp = () => {
    userbase.init({appId: 'bb62abb4-cad7-4a4f-8a96-fe113596ed70'})
        .then(() =>
            userbase.signUp({
                username: 'igor',
                password: 'igor12'
            }))
}
