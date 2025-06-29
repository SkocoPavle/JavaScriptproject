try {
    riskyFunction();
}
catch (error) {
    console.error("An error occurred: ", error.message)
}
finally {
    console.log("Clenup code can go here")
}

throw new Error("This is not good")