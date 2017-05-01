import pandas
import matplotlib.pyplot as plt
from matplotlib import style

style.use('fivethirtyeight')

web_stats = {'Day': [1, 2, 3, 4, 5, 6],
             'Visitors': [43, 34, 65, 56, 29, 76],
             'Bounce Rate': [65, 67, 78, 65, 45, 52]}

df = pandas.DataFrame(web_stats)

# print the first few lines
print df.head()

# print the last few lines
print df.tail()

# print the last 2 lines
print df.tail(2)

# set day as index
df.set_index('Day', inplace=True)

# we can reference specific items in a dataframe
print df['Visitors']

# you can reference parts of the dataframe as part of an object as well
print df.Visitors

# we can plot a single column
df['Visitors'].plot()
plt.show()

# reference multiple columns at a time
print df[['Visitors','Bounce Rate']]