<template>
  <div>
      <nav>
        <ul>
          <li><a href="http://localhost:8080/home">Home</a></li>
          <li><a href="#">Student</a></li>
          <li><a href="#">Teacher</a></li>
          <li><a href="#">Admin</a></li>
          <li><a href="http://localhost:8080/about-us">About</a></li>
          <li><a href=" http://localhost:8080/signup" class="s1">SignUp</a></li>
          <li><a href="http://localhost:8080/signin" class="s1">SignIn</a></li>
        </ul>
      </nav>

      
      <section class="firstsection">
        <!-- <img src="images/a3.jpg" alt="" class="a3"> -->
        <h1>Loging</h1>
        <div class="homelogin">
          <form action="#">
            <label for="email" >Email</label>
            <input type="text" id="name" v-model="sectionone.email">
            <br/>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" v-model="sectionone.password">
            <br/>
            <label for="Role" >Role</label>
              <select id="Role" v-model="sectionone.role">
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Admin">Admin</option>
              </select>

            <br/>
            <button type="submit" class="" @click.prevent="login" >SignIn</button>
          </form>
        </div>
      </section>



      
      <section class="secondsection">
        <img src="images/a7.png" alt="" class="a1">
        <h2>2st</h2>
          hey there jgcvxlkjvcbkljbvkjljvb 
          
      </section>
      <section class="thirdsection">
        <!-- <img src="images/v3.jpeg" alt="" class="v1"> -->
        <h2>3rd</h2>
          hey there jgcvxlkjvcbkljbvkjljvb 
          
      </section>
    
  </div>
  
</template>


<script>
export default {
  data(){
    return{
      sectionone: {
          email:'',
          password: '',
          role: ''
      }
    }
  },
  methods:{
    login(){
      const ldata =
      {
        email: this.sectionone.email,
        password: this.sectionone.password,
        role: this.sectionone.role
      }
      console.log(ldata);
    }
  }
}
</script>








<style scoped>
  
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color:lightseagreen;
    position: fixed;
    top: 0;
    margin-left: 0%;
    width: 100%;
  }
  li {
    float: left;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  .active {
    background-color: #4CAF50;
  }
  li a:hover {
    background-color:yellow;
  }

  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    margin: auto;
  }

.firstsection {
  background-image: url('/images/a5.jpg');
    /* background-color: green; */
    position:fixed;
    right:0%;
    height: 800px;
    width: 680px;
    margin-top: 22px;
    text-align:left;
  }
.secondsection{
  background-color:lightcoral;
  position: fixed;
  margin-top: 22px;
  height: 800px;
  width: 1210px;
  text-align:left;
}

.thirdsection{
  /* background-image: url('/images/a1.jpg'); */
  background-color:cadetblue;
  position: fixed;
  margin-top: 822px;
  height: 100px;
  width: 1890px;
  text-align:left;
}
.a1{
  height: 800px;
  width: 1210px;
}
.a3{
  height: 800px;
  width: 680px;
}
.v1{
  height: 90px;
  width: 1890px; 
}

.homelogin {
    width: 500px;
    padding: 40px;
    position:-webkit-sticky;
    top: 50%;
    left: 50%;
    background: #191919;
    ;
    text-align: center;
    transition: 0.25s;
    margin-top: 100px
}

</style>
