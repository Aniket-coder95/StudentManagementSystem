<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <form onsubmit="event.preventDefault()" class="box">
                            <h1>Login</h1>
                            <p class="text-muted"> Please enter your login and password!</p> 
                            <input type="email" id="email" name="email" placeholder="Username" required v-model="logindata.email" @blur="validateEmail"> 
                            <!-- <p class="floating-placeholder" v-if="msg.email">{{msg.email}}</p> -->
                            <input type="password" id="password" name="password" placeholder="Password" v-model="logindata.password">
                            
                            <div >
                                <label for="Role" >Role</label>
                                <select id="Role" class="cardone" v-model="logindata.role">
                                    <option value="Student">Student</option>
                                    <option value="Teacher">Teacher</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>

                            
                            <input type="submit" name="" value="Login" @click.prevent="login" href="#">
                            <a class="forgot text-muted" href="#">Forgot password?</a> 

                        <div class="col-md-12">
                            <ul class="social-network social-circle">
                                <li><a href="#" class="icoFacebook" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" class="icoTwitter" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#" class="icoGoogle" title="Google +"><i class="fab fa-google-plus"></i></a></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                logindata:{
                    email:'',
                    role:'',
                    password:'',
                    reg: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                }
            }
        },
        methods: {
            login() {
                if(this.logindata.email == null || this.logindata.email == '')
                {
                    alert("Please Enter your Email");
                }
                else if(!this.logindata.reg.test(this.logindata.email))
                {
                    alert("Please Enter Correct Email");
                }
                const ldata ={
                    email: this.logindata.email,
                    password: this.logindata.password,
                    role: this.logindata.role
                }
                console.log(ldata);
                axios.post('http://localhost:7000/signin',ldata)
                
            }
        }
    }
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: linear-gradient(to right, #b92b27, #1565c0)
}

.card {
    margin-bottom: 20px;
    border: none
}
.cardone {
    margin-bottom: 20px;
    border: none
}

.box {
    width: 500px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #191919;
    ;
    text-align: center;
    transition: 0.25s;
    margin-top: 100px
}
.box input[type="email"],
.box input[type="text"],
.box input[type="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 10px 10px;
    width: 250px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s
}

.box h1 {
    color: white;
    text-transform: uppercase;
    font-weight: 500
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
    width: 300px;
    border-color: #2ecc71
}

.box input[type="submit"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer
}

.box input[type="submit"]:hover {
    background: #2ecc71
}

.forgot {
    text-decoration: underline
}

ul.social-network {
    list-style: none;
    display: inline;
    margin-left: 0 !important;
    padding: 0;
    
}

ul.social-network li {
    display: inline;
    margin: 0 5px
    
}

.social-network a.icoFacebook:hover {
    background-color: #3B5998
}

.social-network a.icoTwitter:hover {
    background-color: #33ccff
}

.social-network a.icoGoogle:hover {
    background-color: #BD3518
}

.social-network a.icoFacebook:hover i,
.social-network a.icoTwitter:hover i,
.social-network a.icoGoogle:hover i {
    color:whitesmoke;
}

a.socialIcon:hover,
.socialHoverClass {
    color: #44BCDD
}

.social-circle li a {
    display: inline-block;
    position: relative;
    margin: 0 auto 0 auto;
    border-radius: 50%;
    text-align: center;
    width: 50px;
    height: 50px;
    font-size: 20px
}

.social-circle li i {
    margin: 0;
    line-height: 50px;
    text-align: center
}

.social-circle li a:hover i,
.triggeredHover {
    transform: rotate(360deg);
    transition: all 0.2s
}

.social-circle i {
    color: #fff;
    transition: all 0.8s;
    transition: all 0.8s
}
@import'~bootstrap/dist/css/bootstrap.css'
</style>