import time

def log_event():
    timestamp = int(time.time())
    log_message = f"{timestamp}: Normal event logged\n"
    
    with open("log.txt", "a") as log_file:
        log_file.write(log_message)

def main():
    while True:
        try:
            log_event()
            time.sleep(60)
        except KeyboardInterrupt:
            print("Script terminated by user.")
            break
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    main()
