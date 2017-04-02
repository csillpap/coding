import random

NUMBER_OF_GUESSES = 10
RANGE = 10


def get_input():
    # give the user a certain amount of guesses
    for i in range(NUMBER_OF_GUESSES):
        guess = int(raw_input('guess a number between 0 and ' + str(RANGE - 1) + ': '))
        if guess == random_number:
            print 'Well done!'
            break
        elif guess > random_number:
            print "Too high. You have got " + str(RANGE - 1 - i) + " guesses left."
        else:
            print "Too low. You have got " + str(RANGE - 1 - i) + " guesses left."


while True:
    # generate the random number
    random_number = random.randint(0, RANGE)

    get_input()

    print "let's try a new number!"