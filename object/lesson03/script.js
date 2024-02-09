// Array of objects / un array des objets

const blogs = [
    {
        id:1,
        titre:'Les bases du JavaScript',
        contenu:'Tout savoir sur les bases du JS',
        likes:10
    },
    {
        id:2,
        titre:'Les bases du ReactJS',
        contenu:'Tout savoir sur les bases du ReactJS',
        likes:15
    },
    {
        id:3,
        titre:'Les bases du HTML & CSS',
        contenu:'Tout savoir sur les bases du HTML& CSS',
        likes:8
    },
]

blogs.forEach((blog) => {
    console.log(`
        \tid : ${blog.id},\n
        \ttitre : ${blog.titre},\n
        \tcontenu : ${blog.contenu},\n
        \tlikes : ${blog.likes}
    `);
});