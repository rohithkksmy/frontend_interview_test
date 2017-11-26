

# MacMakler Test

The Project has been developer by Using `ANGUlAR 4 HTML/CSS, Bootstrap` using `Angular Cli`. The bootstrap links has been included in main Html file. 

## Insallation steps

Minimum requirements `Need node 6.9.x and npm 3.x.x` inorder for the installation

* Clone the repository
* Do `npm install`.
* After completing it type ng serve and we can see the server running in `localhost:4200`.
* `ng-build` can be used inorder to build the project and run in production mode.

## linting 

Type `ng lint` inorder to run linting options

## Explanation for using above technical stack

I used css since only a little style is neeeded and for me in this situation there is nothing to reuse style here, since there is bootstrap classes to. Usage of Angular 4 helped me to create the app faster and it help to bind data as usual in previous versions. i would have created a app using React or plain ES6 or Jquery, but Angular 4 is equally fast to React and it has many inbuilt options. I believe Angular 4 is very nice framework and it will a HIT in future.

## Problems faced

I faced a CORS issue while fecting the data from API. So I tested this with chrome by including a cors plugin. Wihtout the CORS pluign 
can't be fetched and shown. So inorder to cope that situation I just created a loader and displayed in mean time. I included and deleted 
many files inorder to maintian clean and structured code which is needed to develope app with Angular 4