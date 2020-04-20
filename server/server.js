// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

const inventoryRouter = require('./routes/inventory.router.js')
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// globals
const port = 5000;

// spin up server
app.listen( port, ()=>{
    console.log( 'server up:', port );
})
// routes
app.use('/inventory', inventoryRouter);
// }) // end /inventory GET

// app.post( '/inventory', ( req, res )=>{
//     console.log( 'in inventory POST:', req.body );
//     inventory.push( req.body );
//     res.sendStatus( 201 );
 // end inventory POST