from multiprocessing import Process
import time

def do_actions():
    i = 0
    while True:
        i += 1
        print(i)
        time.sleep(1)

if __name__ == '__main__':
    # We create a Process
    action_process = Process(target=do_actions)

    # We start the process and we block for 3 seconds.
    action_process.start()
    action_process.join(timeout=3)

    # We terminate the process.
    action_process.terminate()
    print("Hey there! I timed out! You can do things after me!")