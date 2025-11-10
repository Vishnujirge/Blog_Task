const cl= console.log;
const blogForm = document.getElementById("blogForm");
const PostBlog = document.getElementById("PostBlog");
const blogContent = document.getElementById("blogContent");
const blogContainer = document.getElementById("blogContainer");



let PostBlogArr =[];

const snackBar = (icon, msg)=>{
      Swal.fire({
        title: msg,
        icon: icon,
        timer : 2000
    })
}


const onSubEve =(eve)=>{
  eve.preventDefault();

   let  postBlogObj={
     
    title : PostBlog.value,
    content : blogContent.value

    }

    postBlogDB(postBlogObj);

    
}

const postBlogDB = (obj)=>{
    setTimeout (()=>{

    let error1 = Math.random()>0.4 ? false : true;
    
    if(!error1){
        PostBlogArr.push(obj);
          FetchBlog(PostBlogArr);
          snackBar("success","Added");

    }else{

      snackBar("error","something went wrong while postBlog");
    }

    },2000);
}

const FetchBlog = (arr)=>{
    setTimeout(()=>{
            let error1 = Math.random()>0.4 ? false : true;

            if(!error1){
                // let data = arr;

                temp(arr);
            }else{
            snackBar("error","Fetch failed, showing old data");
                temp(arr);

            }

    },1000);
}

const temp =(data)=>{
    let r1 = "";

    data.forEach(blog=>{
        r1 += `   
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="card">
                    <div class="card-header">
                       <h5>${blog.title}</h5>
                    </div>
                    <div class="card-body">
                        <p>${blog.content}</p>
                    </div>
                </div>
            </div>
               `

    })
    blogContainer.innerHTML = r1;

}


blogForm.addEventListener("submit",onSubEve);