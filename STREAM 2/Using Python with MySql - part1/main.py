from database.mysql import MySQLDatabase
from settings import db_config

"""
Retrieve the settings from the
`db_config` dictionary to connect to
our database so we can instantiate our
MySQLDatabase object
"""
db = MySQLDatabase(db_config.get('db_name'),
                   db_config.get('user'),
                   db_config.get('pass'),
                   db_config.get('host'))

# Get all the available tables for
# our database and print them out.
tables = db.get_available_tables()
print tables


# Get all the available columns for our
# articles table and print them out
columns = db.get_columns_for_table('articles')
print columns


# Challenge 1
# Get all the available columns for our
# profiles table and print them out
columns = db.get_columns_for_table('profiles')
print columns


# Challenge 2
# Get all the available columns for our
# orders table and print them out
columns = db.get_columns_for_table('orders')
print columns


# Challenge 3
# Get all the available columns for our
# people table and print them out
columns = db.get_columns_for_table('people')
print columns


# Get all the records from
# the people table
all_records = db.select('people')
print "All records: %s" % str(all_records)

# Get all of the records from
# the people table but only the
# `id` and `first_name` columns
column_specific_records = db.select('people', ['id', 'first_name'])
print "Column specific records: %s" % str(column_specific_records)

# Select data using the WHERE clause
where_expression_records = db.select('people', ['first_name'],
                                     where="first_name='John'")
print "Where Records: %s" % str(where_expression_records)

# Select data using the WHERE clause and
# the JOIN clause
joined_records = db.select('people', ['first_name'],
                           where="people.id=3",
                           join="orders ON people.id=orders.person_id")
print "Joined records: %s" % str(joined_records)

# Delete a record from the database
db.delete('orders', id="=3")

# We can also use multiple WHERE clauses!
db.delete('orders', id=">4", amount=">1")


# Get all the records from
# the people table
results = db.select('people')

for row in results:
    print row


# Selecting columns with named tuples
results = db.select('people',
                    columns=['id', 'first_name'], named_tuples=True)

for row in results:
    print row.id, row.first_name


# We can also do more complex queries using `CONCAT`
# and `SUM`
people = db.select('people', columns=["CONCAT(first_name, ' ', second_name)" \
                                      " AS full_name", "SUM(amount)" \
                                                       " AS total_spend"],
                   named_tuples=True, where="people.id=1",
                   join="orders ON people.id=orders.person_id")

for person in people:
    print person.full_name, "spent ", person.total_spend


# Inserting an order
db.insert('orders', person_id="2", amount="120.00")


# Updating a person
person = db.select('people', named_tuples=True)[0]

db.update('profiles', where="person_id=%s" % person.id,
          address="1a another street")


# Deleting a record
person = db.select('people',named_tuples=True)[0]
db.delete('orders', person_id="=%s" % person.id, id="=1")


# Using Python with MySql 3 - Challenge A
# Using the AVG(), select a person from your people table and get the average amount they spend
# at the same time, create a column that reads "first_name spends"
# Then print out the columns to provide the answers in the terminal.
people = db.select('people', columns=["CONCAT(first_name, ' spends')" \
                                      " AS first_name_spends", "AVG(amount)" \
                                                       " AS average_spend"],
                   named_tuples=True, where="first_name='Bea'",
                   join="orders ON people.id=orders.person_id")

for person in people:
    print person.first_name_spends, person.average_spend, " on average"


# Using Python with MySql 3 - Challenge B
# Create a new person in the people table and add in a profile row and two orders of random value.
db.insert('people', first_name='Adam', second_name='Smith', DOB='STR_TO_DATE("02-03-1980", "%d-%m-%Y")')
# for updating the profiles table for Adam we need to get his id
adam = db.select('people', ["id", "first_name"], where="first_name='Adam'", named_tuples=True)
adam = adam[0]
db.update('profiles', person_id="%s" % adam.id,
          address="Bournemouth")
# adding two orders for Adam
db.insert('orders', person_id="%s" % adam.id, amount="59.00")
db.insert('orders', person_id="%s" % adam.id, amount="150.00")


# Using Python with MySql 3 - Challenge C
# Once you have added them in use select to get their full name
# and the minimum amount they have spent.
people = db.select('people', columns=["CONCAT(first_name, ' ', second_name)" \
                                      " AS full_name", "MIN(amount)" \
                                                       " AS min_spend"],
                   named_tuples=True, where="people.id='%s'" % adam.id,
                   join="orders ON people.id=orders.person_id")

for person in people:
    print "The minimum spend of", person.full_name, "was", person.min_spend