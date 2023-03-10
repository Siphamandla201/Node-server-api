<template>
    <div class="Sign-up">
        <form class="form" :action="postMessage">
            <div class="form-information">
                <label for="fName">First name</label>
                <input type="text">
            </div>
            <div class="form-information">
                <label for="Surname">Surname</label>
                <input type="text">
            </div>
            <div class="form-information">
                <label for="Email">Email Address</label>
                <input type="text">
            </div>
            <div class="form-information">
                <label for="CellphoneNumber">Cellphone number</label>
                <input type="text">
            </div>
            <div class="form-information">
                <label for="Password">Password</label>
                <input type="text">
            </div>
            <div class="form-information">
                <label for="Address">Address</label>
                <input type="text">
            </div>
            <fieldset class="form-information">
                <legend>Gender</legend>
                <div>
                   <input type="checkbox" id="Male" name="Male" checked>
                   <label for="Male">Male</label>
                </div>
                <div>
                   <input type="checkbox" id="Female" name="Female">
                   <label for="Female">Female</label>
                </div>
                <div>
                   <input type="checkbox" id="other" name="other">
                   <label for="other">other</label>
                </div>
            </fieldset>
            <input class="submit" type="submit" value="submit">
        </form>
        <div class="more-info">
            <h1>More information</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SignupForm'  
}
</script>
<style>
.Sign-up {
    margin: 50px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form, .more-info {
    flex-basis: 50%;
    padding: 50px;
}

.form {
    text-align: justify;
    border: 2px solid black;
}

.form-information {
    margin-bottom: 15px;
}

input {
    border: none;
    border-bottom: 2px solid black;
}

fieldset {
    border: none;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0%;
    margin-left: -5px;
}

.submit {
    border: 1px solid black;
    margin: 5% 45%;
}


</style>