const loadApiSite = async () =>{
    const res =await fetch ('https://openapi.programming-hero.com/api/retro-forum/posts');

    const data = await res.json();
    const postApi = data.posts;
    // console.log(postApi)
    displayPost(postApi)

}
const displayPost = postApi =>{
    const postContainer = document.getElementById('music-area');
    // console.log(postApi)
    postApi.forEach(post => {
        // console.log(post)
        const postCard = document.createElement('div');
        postCard.classList = `flex justify-center items-center mt-12 gap-5`
        postCard.innerHTML = `
        <div  class="flex border-2 p-5 rounded-xl  gap-8">
                        <div id="" class="bg-white h-20 w-24 rounded-lg text-end">
                        <p class="rounded-full p-  with1%]
                        bg-[#15fc07]"></p>
                        <img class= ""src="${post.image}" alt="">
                        </div>

                        <div class=" ">
                            <div class="flex gap-5">
                                <h3 class="font-medium text-[#59596d]">${post.category}</h3>
                                <h3 class="font-medium text-[#59596d]">Author: ${post.author.name}</h3>
                            </div>
                            <h2 class="font-bold text-[#12132d] text-[20px]">${post.title}
                            </h2>
                            <p class="text-[16px] text-[#717181]">${post.description}</p>
                            <hr class="border-dashed mt-5 mb-5 bg-gray-500">
                            <div class="flex items-center">
                                <div class="flex gap-5">
                                    <div class="flex items-center gap-4 text-[#6c6c81]">
                                        <i class="fa-regular fa-message"></i>
                                        <p id="">${post.comment_count}</p>
                                    </div>
                                    <div class="flex items-center gap-4 text-[#6c6c81]">
                                        <i class="fa-regular fa-eye"></i>
                                        <p id="">${post.view_count}</p>
                                    </div>
                                    <div class="flex text-[#6c6c81] items-center gap-4">
                                        <i class="fa-regular fa-clock"></i>
                                        <p id="">${post.posted_time}min</p>
                                    </div>
                                    <div class="bg-[#10b981] rounded-full p-3">
                                        <i class="text-white fa-regular fa-envelope-open"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
        `
        postContainer.appendChild(postCard)
    });
    
}

// Function to fetch data from the API
async function fetchData() {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await response.json();
    return data;
  }
  
  // Function to append data to individual div
  async function latestData() {
    const data = await fetchData();
    const container = document.getElementById('latest-post');
    data.forEach(post => {
        console.log(post)
        const div = document.createElement('div');
        div.className = 'card w-96 bg-base-100 shadow-xl ';
        div.innerHTML = `
    <figure class="px-10 pt-10">
        <img src="${post.cover_image}" alt="Cover Image" class="rounded-xl" />
    </figure>
    <div class="card-body">
    <p class="text-[#717181] text-[16px] mt-6"><i class=" fa-regular fa-calendar"></i>${post.author.posted_date ? post.author.posted_date: 'No publish date'}</p>
        <h1 class="font-bold text-lg">${post.title}</h1>
        <p>${post.description}</p>
        <div class="flex gap-x-4">
            <div>
                <img class="w-[44px] h-[px] rounded-full" src="${post.profile_image}" alt="Profile Image">
            </div>
            <div>
                <h3 class="font-bold">${post.author.name}</h3>
                <p>${post.author.designation ? post.author.designation : 'Unknown'}</p>
            </div>
        </div>
    </div>
  `;
        container.appendChild(div);
    });
  }
  
  // Call the function to append data
  latestData();
// latestPost()
loadApiSite();