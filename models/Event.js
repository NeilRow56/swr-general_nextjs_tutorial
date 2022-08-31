import mongoose from 'mongoose'
 
 
const EventSchema = new mongoose.Schema({
   title: {
       type: String,
       
      
   },
   description: {
       type: String,
       
      
   },
   category: {
       type: String,
       
      
   },
   date: {
       type: String,
       
      
   },
   
},
{timestamps: true}
)
 
export default mongoose.models.Event || mongoose.model("Event", EventSchema)