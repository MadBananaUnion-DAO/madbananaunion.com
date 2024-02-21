from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

# SQLite database setup
conn = sqlite3.connect('button_records.db')
cursor = conn.cursor()
cursor.execute('''
    CREATE TABLE IF NOT EXISTS button_records (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        button_id TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
''')
conn.commit()
conn.close()

# Flask route to render the HTML page
@app.route('/')
def index():
    return render_template('index.html')

# Flask route to record button clicks
@app.route('/record_button_click', methods=['POST'])
def record_button_click():
    data = request.get_json()
    button_id = data.get('buttonId')

    # Insert the button click record into the database
    conn = sqlite3.connect('button_records.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO button_records (button_id) VALUES (?)', (button_id,))
    conn.commit()
    conn.close()

    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
