
<template>
  <div class="container">
    <h1>Employee Data</h1>
    <EmployeeTable></EmployeeTable>
    <EmployeeForm></EmployeeForm>
  </div>
  
</template>

<script setup>
import EmployeeTable from './components/EmployeeTable.vue';
import EmployeeForm from './components/EmployeeForm.vue';
import { onMounted, provide, reactive, ref } from 'vue';

const employees = ref([]);

provide('FunData', reactive({
  emp: [
    {
      Id: 1,
      Name: "Anantha Narayaanan",
      Email: 'anananantha28@gmail.com',
    },
    {
      Id: 2,
      Name: "Pratheep N",
      Email: "praatheepn16@gmail.com",
    },
    {
      Id: 3,
      Name: "Harsha Vardhan V",
      Email: "harshavardhanv@gmail.com",
    },
  ],
}));

const addEmployee =  async (employee) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users",
      {
        method:'POST',
        body:JSON.stringify(employee),
        headers:{'content-type':'application/json; charset=UTF-8'}
      }
    );
    
    const data = await response.json();
    employees.value.push(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteEmployee =  async (id) => {
  try {
    await fetch('https://jsonplaceholder.typicode.com/users/'+id,{
      method:'DELETE', 
    });

    employees.value = employees.value.filter((employee)=>{
      return employee.id!=id;
    })
  } catch (error) {
    console.log(error);
  }
};

const editEmployee = async (id,updatedEmployee)=> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/'+id,{
      method: 'PUT',
      body:JSON.stringify(updatedEmployee),
      headers:{'content-type':'application/json; charset=UTF-8'}
    });

    const data = await response.json();

    employees.value.map((employee)=>{
      return employee.id==id?data:employee;
    })
  } catch (error) {
    console.log(error);
  }
};


const getEmployess = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users",{
      method:'GET',
    })
    const data = await response.json();
    employees.value = data;
  } catch (error) {
    console.log(error);
  }
};


onMounted(()=>{
  getEmployess();
})

</script>

<style scoped>

.container {
  max-width: 680px;
}

</style>