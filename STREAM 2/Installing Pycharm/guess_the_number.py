import random

NUMBER_OF_GUESSES = 10
RANGE_TOP = 10


def get_input():
    # give the user a certain amount of guesses
    for i in range(NUMBER_OF_GUESSES):
        guess = int(raw_input('guess the number: '))
        if guess == random_number:
            print 'well done'
            break
        elif guess > random_number:
            print "too high"
        else:
            print "too low"


while True:
    # generate the random number
    random_number = random.randint(0, RANGE_TOP)

    get_input()

    print "let's try a new number!"