module.exports = function(sequelize, DataTypes){
	 var petFinder = sequelize.define("petFinder",{

        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
            len: [1]    
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
            len: [5]    
            }
        },
        zipcode_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
            len:[5]
        }
        },
        created_at: {
		type: DataTypes.DATE 
		 },
        petID:{
            type: DataTypes.STRING,
              allowNull: false,
              validate: {
            len: [1]
         }    
     },
     

}

    });
    return petFinder;
};