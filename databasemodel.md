classes:{
    class1:{
        subject: "",
        assignment1:{
            assignmentType:"",
            title:"",
            postDate:"",
            dueDate:"",
            content:""
        },
    class2:{
        subject: "",
        assignment1:{
            assignmentType:"",
            title:"",
            postDate:"",
            dueDate:"",
            content:""
        }
    }
}

admins:{
    admin1:{
        email:"",
        password:""
    }
}

teachers:{
    teacher1:{
        email:"",
        password:""
    },
    teacher2:{
        email:"",
        password:""
    }
}

students:{
    student1:{
        email:"",
        password:""
    },
    student2:{
        email:"",
        password:""
    }
}

class_enrollments:{
    class1:{
        student1: true,
        student2: true
    }
    class2:{
        student1:true,
        student2: false
    }
}

student_enrollments:{
    student1:{
        class1:true,
        class2:false
    },
    student2:{
        class1:true,
        class2:false
    }
}

teacher_classes:{
    teacher1:{
        class1: true,
        class2: true
    }
}