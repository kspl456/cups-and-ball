import random

def continue_(choice):
    pos=100
    while choice not in ['yes','no']:
        choice=input('Do you want to continue the game?\nEnter "yes" or "no" ')
        if choice=='yes':
            start(pos)
            return choice
        elif choice=='no':
            print('Thank you for playing the game! :)\n')
            return choice
        else: 
            print('Sorry! did not understand :(\n')
            return choice

def game1(pos):
    lst=[' ','O',' ']
    random.shuffle(lst)
    if lst[pos-1]=='O':
        print(lst)
        print('Yay! You won the game! ^o^\n')
    else: 
        print(lst)
        print('Sorry, better luck next time ＞︿＜\n')

def start(pos):
    while pos not in [1,2,3]:
        pos=int(input('Please enter a position (1,2,3):'))
        if pos  in [1,2,3]:
            game1(pos)
        else:
            print('Oh no... Seems like a wrong position\n')

print('Welcome to the random choice game!\n')
pos=100
start(pos)
choice='ygd'
while choice!='no':
    choice=continue_(choice)