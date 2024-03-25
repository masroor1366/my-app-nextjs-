export async function GET(request) {
    const mongoose=require('mongoose');
    var data='test'
    mongoose.connect(
        'mongmmin'
        ).then(
            data= 'connected my db55'
        ).catch(err=> data=err
            
        )
    return Response.json({ data })

}


