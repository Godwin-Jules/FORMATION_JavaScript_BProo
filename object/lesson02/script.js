// Literal object (Objet littéral)

const personne = {
    nom:'Dieu donné',
    email:'mdjulesdeveloper23@gmail.com',
    age:20,
    taille:1.80,
    couleur:'Noire',
    blogs:[
        'Les bases de JS',
        'Les bases de React',
        'Les bases de HTML & CSS'
    ],
    // Ajout de méthodes à un objet !
    login: function(){
        console.log('utilisateur connecté');
    },
    logout: function(){
        console.log('utilisateur déconnecté');
    },
    afficherBlogs: function(){
        console.log(this.blogs);
    },
    afficherBlog: function(){
        this.blogs.forEach((blog) => {
            console.log(blog);
        });
    }
    // afficherBlog: ()=>{
    //     this.blogs.forEach((blog) => {
    //         console.log(blog);
    //     })
    // }
};
// Faites vraiment attention dans la déclaration de vos méthodes : NE JAMAIS UTILSER DE ARROW FUNCTION LA OU VOUS UTILISEZ LE MOT CLE 'this'
personne.login();
personne.logout();
personne.afficherBlogs();
// console.log(this);
console.log('--------------------------------');
personne.afficherBlog();