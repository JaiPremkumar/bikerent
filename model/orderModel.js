const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    shippingInfo:{
        address:{
            type:String,
        
        },
        country:{
            type:String,
            
        },
        city:{
            type:String,
    
        },
        phoneNo:{
            type:String,
        
        },
        postalcode:{
            type:String,
        
        },
        startDate:{
            type:Date
        },
        endDate:{
            type:Date
        }
    
},
user:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'User'
},
orderItem:[{    
    name:{
        type:String,
        
    },
    quantity:{
        type:Number,
    
    },
    image:{
        type:String,
        
    },
    price:{
        type:Number,
        
    },
    product:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Product'
    }
}],
itemsPrice:{
    type:Number,
    default:0.0
},

totalPrice:{
    type:Number,
    default:0.0
},
paidAt:{
    type:Date
},
deliveredAt:{
    type:Date
},
orderStatus:{
    type:String,

    default:'Processing'
},
createdAt:{
    type:Date,
    default:Date.now()  
}

})
let Schema = mongoose.model('orders',orderSchema)

module.exports=Schema