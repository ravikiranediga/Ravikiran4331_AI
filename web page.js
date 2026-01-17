<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Web Page</title>
    
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            background-color: #f4f7f6;
            color: #333;
        }

        /* Navigation Bar */
        nav {
            background-color: #2c3e50;
            color: white;
            padding: 1rem;
            text-align: center;
        }

        /* Main Content Container */
        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        /* Styling the Image */
        .profile-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            display: block;
            margin: 0 auto 20px;
            border: 3px solid #3498db;
        }

        h1 {
            color: #2c3e50;
            text-align: center;
        }

        p {
            line-height: 1.6;
        }

        /* Call to Action Button */
        .cta-button {
            display: block;
            width: 200px;
            margin: 20px auto;
            padding: 10px;
            background-color: #3498db;
            color: white;
            text-align: center;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }

        .cta-button:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>

    <nav>
        <strong>My Developer Portfolio</strong>
    </nav>

    <div class="container">
        <img src="https://via.placeholder.com/150" alt="Profile Picture" class="profile-img">
        
        <h1>Hi, I'm a Web Developer</h1>
        <p>
            I am currently learning how to build websites using <strong>HTML</strong> for structure 
            and <strong>CSS</strong> for design. This page is a complete program that includes 
            both languages in one place!
        </p>

        <a href="#" class="cta-button">Contact Me</a>
    </div>

</body>
</html>