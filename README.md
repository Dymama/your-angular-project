Premier projet Angular

Projet Angulare

Fonctionnalité implémentées:

	- Authentification par token
		Apres que l'utilisateur ait crée son compte l'api génère un token basé sur les informations reçu du l'utilisateur. 
		Lors de la connexion de l'utilisateur, elle compare la valeur du token généré pour le client et celles présente dans sa base de données, si elle correspond,
		l'aoi renvoie "True" dans le cas contraire elle renvoie false.
		
	- Possibilité de créer un compte
	- Ajouter des assignments,Noter et suppression des Assignments
	- La fonctionnalité de Drag and Drop a été implémenté,
	- La base de données contient bien au moins 500 Assignments
	- La classification dans un tableau des assignements en fonction qu'ils soient rendus ou non,
	- A chaque matière est associé la photo et le nom du professeur qui l'enseigne,
	- Certaines pages sont consultables à condition que l'utilisateur se soit connecté,

NB: le projet a été hébergé sur Heroku. : https://youanmama.herokuapp.com/

https://github.com/Dymama/api (api 1)
https://github.com/Dymama/apiuser (api 2)
https://github.com/Dymama/your-angular-project
