import unittest
from vending_machine import give_change
from vending_machine import give_item_and_change


class TestVendingMachine(unittest.TestCase):
    def test_return_change(self):
        self.assertEqual(give_change(.17), [.10, .05, .02])
        self.assertEqual(give_change(.18), [.10, .05, .02, .01])
        self.assertEqual(give_change(.04), [.02, .02])

    def test_unavailable_item(self):
        """if user asks for an item that's unavailable, they should not be given the item, and their money should be returned"""
        item, change, _ = give_item_and_change('crisps', .50)
        self.assertIsNone(item)
        self.assertEqual(change, 0.4)

    def test_not_enough_money(self):
        """if user haven't put enough money in the machine, they should not be given the item, and their money should be returned"""
        item, change, _ = give_item_and_change('biscuits', 1)
        self.assertEqual(change, 1)

    def test_return_item_and_change(self):
        """give the user the right item and change if they have choosen an available item and inserted the enough coins"""
        item, change, _ = give_item_and_change('coke', 2)
        self.assertEqual(change, [1, .20, .05, .02])

