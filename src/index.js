import app from './app';
import './database';

// Starting the Server

app.listen(app.get('port'), () => {
    console.log("Server is running on port" , app.get('port'));
});
