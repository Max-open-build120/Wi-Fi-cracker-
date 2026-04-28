<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wi-Fi Cracker - Universal Network Penetration Tool</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Courier New', monospace;
            background: radial-gradient(circle at center, #0d1a0d 0%, #050505 100%);
            color: #00ff00;
            line-height: 1.6;
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
        }
        
        header {
            text-align: center;
            padding: 50px 0 30px;
            border-bottom: 2px solid #00ff00;
            position: relative;
        }
        
        header::after {
            content: ;
            position: absolute;
            top: 10px;
            right: 0;
            background: #ff0000;
            color: #fff;
            padding: 5px 15px;
            font-size: 0.8em;
            letter-spacing: 2px;
        }
        
        h1 {
            font-size: 3.5em;
            text-shadow: 0 0 20px #00ff00, 0 0 40px rgba(0,255,0,0.3);
            margin-bottom: 10px;
            letter-spacing: 3px;
        }
        
        .tagline {
            font-size: 1.3em;
            color: #00cc00;
            text-transform: uppercase;
            letter-spacing: 4px;
        }
        
        .console {
            background: linear-gradient(180deg, #000000 0%, #0a0a0a 100%);
            padding: 25px;
            margin: 30px 0;
            border-radius: 15px;
            min-height: 320px;
            overflow-x: auto;
            border: 2px solid #00ff00;
            box-shadow: 0 0 30px rgba(0,255,0,0.1), inset 0 0 50px rgba(0,255,0,0.02);
            position: relative;
        }
        
        .console::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ff00, transparent);
        }
        
        .console-line {
            margin: 10px 0;
            opacity: 0;
            animation: fadeIn 0.5s forwards;
            font-size: 1.1em;
            text-shadow: 0 0 5px rgba(0,255,0,0.5);
        }
        
        @keyframes fadeIn {
            to { opacity: 1; }
        }
        
        .prompt {
            color: #00ff00;
        }
        
        .output {
            color: #00cc00;
        }
        
        .error {
            color: #ff0000;
            text-shadow: 0 0 5px rgba(255,0,0,0.5);
        }
        
        .warning {
            color: #ffaa00;
            text-shadow: 0 0 5px rgba(255,170,0,0.5);
        }
        
        .progress-bar {
            width: 100%;
            height: 25px;
            background: #111;
            border: 1px solid #00ff00;
            margin-top: 15px;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
        }
        
        .progress-fill {
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, #00ff00, #00cc00, #00ff00);
            animation: progress 5s forwards;
            box-shadow: 0 0 15px #00ff00;
            position: relative;
        }
        
        .progress-fill::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 30px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3));
        }
        
        @keyframes progress {
            to { width: 100%; }
        }
        
        .locked {
            display: none;
            background: linear-gradient(180deg, #1a1a1a 0%, #111 100%);
            border: 2px solid #ff0000;
            padding: 30px;
            margin: 30px 0;
            text-align: center;
            border-radius: 15px;
            box-shadow: 0 0 30px rgba(255,0,0,0.2), inset 0 0 50px rgba(255,0,0,0.05);
            position: relative;
            overflow: hidden;
        }
        
        .locked::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #ff0000, transparent);
        }
        
        .locked h2 {
            color: #ff0000;
            margin-bottom: 20px;
            font-size: 1.8em;
            letter-spacing: 5px;
            text-shadow: 0 0 10px rgba(255,0,0,0.5);
        }
        
        .access-preview {
            display: none;
            margin: 25px auto;
            padding: 30px 20px;
            background: #0d0d0d;
            border: 2px solid #ffaa00;
            border-radius: 10px;
            max-width: 400px;
            box-shadow: 0 0 20px rgba(255,170,0,0.1);
        }
        
        .access-preview h3 {
            color: #ffaa00;
            margin-bottom: 20px;
            font-size: 1.5em;
            letter-spacing: 4px;
            text-transform: uppercase;
        }
        
        .code {
            font-size: 42px;
            letter-spacing: 8px;
            color: #ffaa00;
            margin: 20px 0;
            text-shadow: 0 0 15px rgba(255,170,0,0.5);
            font-weight: bold;
        }
        
        .access-preview p {
            color: #00ff00;
            margin: 15px 0;
            font-size: 1em;
        }
        
        .btn {
            display: inline-block;
            margin-top: 15px;
            padding: 14px 30px;
            background: linear-gradient(180deg, #0088cc 0%, #006699 100%);
            color: #fff;
            text-decoration: none;
            border-radius: 8px;
            font-size: 1.1em;
            letter-spacing: 1px;
            box-shadow: 0 5px 15px rgba(0,136,204,0.3);
            transition: all 0.3s;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .btn:hover {
            background: linear-gradient(180deg, #0099dd 0%, #0077aa 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,136,204,0.4);
        }
        
        .note {
            color: #ff4444;
            margin-top: 15px;
            font-size: 0.9em;
            text-shadow: 0 0 5px rgba(255,68,68,0.3);
        }
        
        .telegram-btn {
            display: inline-block;
            margin-top: 20px;
            padding: 16px 35px;
            background: linear-gradient(180deg, #0088cc 0%, #006699 100%);
            color: #fff;
            text-decoration: none;
            border-radius: 8px;
            font-size: 1.1em;
            letter-spacing: 1px;
            box-shadow: 0 5px 15px rgba(0,136,204,0.3);
            transition: all 0.3s;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .telegram-btn:hover {
            background: linear-gradient(180deg, #0099dd 0%, #0077aa 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,136,204,0.4);
        }
        
        .scanline {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: rgba(0,255,0,0.1);
            animation: scanline 8s linear infinite;
            pointer-events: none;
            z-index: 1000;
        }
        
        @keyframes scanline {
            0% { top: 0%; }
            100% { top: 100%; }
        }
        
        footer {
            text-align: center;
            padding: 30px;
            border-top: 2px solid #00ff00;
            margin-top: 40px;
            color: #00cc00;
            font-size: 0.9em;
            text-shadow: 0 0 5px rgba(0,255,0,0.3);
        }
        
        .glitch {
            animation: glitch 3s infinite;
        }
        
        @keyframes glitch {
            0%, 90%, 100% { transform: translate(0); }
            92% { transform: translate(-2px, 1px); }
            94% { transform: translate(2px, -1px); }
            96% { transform: translate(-1px, -1px); }
            98% { transform: translate(1px, 1px); }
        }
    </style>
</head>
<body>
    <div class="scanline"></div>
    
    <div class="container">
        <header>
            <h1 class="glitch">Wi-Fi CRACKER</h1>
            <p class="tagline">Universal Network Penetration System</p>
        </header>
        
        <div class="console" id="console">
            <div class="console-line" style="animation-delay: 0.5s;"><span class="prompt">$</span> <span class="output">initiate_crack --target "HomeNetwork_5G" --range 100</span></div>
            <div class="console-line" style="animation-delay: 1s;"><span class="output">[INFO] Initializing Wi-Fi Cracker v9.0...</span></div>
            <div class="console-line" style="animation-delay: 1.5s;"><span class="output">[INFO] Loading FPGA decryption cluster...</span></div>
            <div class="console-line" style="animation-delay: 2s;"><span class="output">[INFO] Calibrating high-gain antennas...</span></div>
            <div class="console-line" style="animation-delay: 2.5s;"><span class="output">[INFO] Broadcasting deauthentication frames...</span></div>
            <div class="console-line" style="animation-delay: 3s;"><span class="output">[INFO] Target device entering proximity range...</span></div>
            <div class="console-line" style="animation-delay: 3.5s;"><span class="output">[INFO] Signal strength: -45 dBm</span></div>
            <div class="console-line" style="animation-delay: 4s;"><span class="output">[INFO] Capturing 4-way handshake...</span></div>
            <div class="console-line" style="animation-delay: 4.5s;"><span class="output">[SUCCESS] Handshake captured (WPA2-PSK)</span></div>
            <div class="console-line" style="animation-delay: 5s;"><span class="output">[INFO] Initializing GPU decryption...</span></div>
            <div class="console-line" style="animation-delay: 5.5s;"><span class="output">[INFO] Testing password combinations...</span></div>
            <div class="console-line" style="animation-delay: 6s;">
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
            </div>
            <div class="console-line" style="animation-delay: 11s;"><span class="error">[ERROR] LICENSE VALIDATION FAILED</span></div>
            <div class="console-line" style="animation-delay: 11.5s;"><span class="warning">[WARNING] Decryption halted at 67%</span></div>
            <div class="console-line" style="animation-delay: 12s;"><span class="warning">[WARNING] Password masked: ************</span></div>
            <div class="console-line" style="animation-delay: 12.5s;"><span class="error">[LOCKDOWN] Full access requires valid license key</span></div>
            
            <div class="locked" id="locked">
                <h2>🔒 ACCESS DENIED</h2>
                <p>Wi-Fi Cracker has successfully infiltrated the target network.</p>
                <p>Decryption is <span style="color: #ffaa00;">67% complete</span>.</p>
                <p>The password has been recovered but is encrypted.</p>
                <p>To reveal the full password and unlock all features, a valid license is required.</p>
                
                <div class="access-preview" id="accessPreview">
                    <h3>ACCESS PREVIEW</h3>
                    <div class="code" id="passwordDisplay"></div>
                    <p>Permission required.</p>
                    <p class="note">Accessing Only - real Wi-Fi cracker</p>
                </div>
                
                <br>
                <p><strong>Contact the developer to purchase your license:</strong></p>
                <a href="https://t.me/SteelOwnerX" class="telegram-btn">Contact on Telegram @Steel_OwnerX</a>
            </div>
        </div>
        
        <footer>
            <p>Wi-Fi Cracker v9.0 | Forced Proximity Authentication System</p>
            <p>FOR AUTHORIZED USE ONLY</p>
        </footer>
    </div>
    
    <script>
        // Generate random partial password - not visible in HTML source
        function generatePartialPassword() {
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let visible = '';
            for(let i = 0; i < 4; i++) {
                visible += chars[Math.floor(Math.random() * chars.length)] + ' ';
            }
            return visible + '# # # #';
        }
        
        // Set the password when page loads
        document.getElementById('passwordDisplay').textContent = generatePartialPassword();
        
        setTimeout(function() {
            document.getElementById('locked').style.display = 'block';
            document.getElementById('locked').scrollIntoView({ behavior: 'smooth' });
        }, 13000);
        
        setTimeout(function() {
            document.getElementById('accessPreview').style.display = 'block';
            document.getElementById('accessPreview').scrollIntoView({ behavior: 'smooth' });
        }, 14000);
    </script>
</body>
</html>
