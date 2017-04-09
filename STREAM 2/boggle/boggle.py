def check():
    return 1

def make_grid(width, height):
    return {}

def make_grid(height, width):
    return {(row, col): ' ' for row in range(height)
                            for col in range(width)}