<template>
  <form action="#" method="post">
    <h2>Sign Up</h2> 
    <div>
      <label for="name" class="floatLabel" >Name</label>
      <input type="text" id="name" v-model="formValues.name">
    </div>
      <div>
        <label for="Email" class="floatLabel">Email</label>
        <input id="Email" name="Email" type="text" v-model="formValues.email">
      </div>
      <div>
        <label for="password" class="floatLabel">Password</label>
        <input id="password" name="password" type="password" v-model="formValues.password">
        <br>
        <!-- span>Enter a password longer than 8 characters</span -->
      </div>
      <div>
        <label for="confirm_password" class="floatLabel">Confirm Password</label>
        <input id="confirm_password" name="confirm_password" type="password"
        v-model="formValues.confirm_password">
        <!-- span>Your passwords do not match</span -->
      </div>
      <div>
        <label for="contact" class="floatLabel">Contact no.</label>
        <input id="contact" name="contact" type="text" v-model="formValues.contact">
      </div>
      <div>
        <label for="Role"  class="floatLabel">Role</label>
        <select id="Role" v-model="formValues.role">
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <p>
        <button type="submit" class="signup" @click.prevent="signup" >SignUp</button>
      </p>
    </form>
</template>
 
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                formValues: {
                  name:'',
                  email:'',
                  password:'',
                  confirm_password:'',
                  contact:'',
                  role:''
                }
            }
        },
        methods :{
          signup() {
            //console.log("hello",this.formValues.name)
            if(!this.formValues.name || !this.formValues.email ||!this.formValues.password || !this.formValues.confirm_password
            || !this.formValues.contact || !this.formValues.role){
              console.log(this.name)
              return window.alert("please fill you data!");
            }
            else if(this.formValues.password !== this.formValues.confirm_password){
              return window.alert("Password missmatch");
            }
            const logdata = 
            {
              contact:this.formValues.contact,
              email: this.formValues.email,
              name : this.formValues.name,
              password : this.formValues.password,
              role:this.formValues.role
            }
            console.log(logdata);
            axios.post('http://localhost:7000/signup',logdata)
            window.alert('you are signed up');
            window.location.href = "http://localhost:8080";
            
          }
        }
    }
</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center
}
body {
  background: #384047;
  font-family: sans-serif;
  font-size: 10px;
  
}
form {
  background: #fff;
  padding: 4em 4em 2em;
  max-width: 400px;
  margin: 50px auto 0;
  box-shadow: 0 0 1em #222;
  border-radius: 2px;
  color: chocolate;
}

</style>