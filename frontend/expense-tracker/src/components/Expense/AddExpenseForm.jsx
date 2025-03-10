import React, { useState } from 'react';
import Input from '../inputs/Input';
import EmojiPickerPopup from '../EmojiPickerPopup';

const AddExpenseForm = ({ onAddExpense }) => {
    const [income, setIncome] = useState({
        category: '',
        amount: '',
        date: '',
        icon: '',
    });

    const handleChange = (key, value) => setIncome({ ...income, [key]: value });

    return (
        <div>
            <EmojiPickerPopup
                icon={income.icon}
                onSelect={(selectedIcon) => handleChange('icon', selectedIcon)}
            />
            <Input
                value={income.category}
                //prettier-ignore
                onChange={({ target }) => handleChange('category', target.value)}
                label={'Category'}
                type={'text'}
                placeholder={'Rent, Shopping, etc...'}
            />
            <Input
                value={income.amount}
                onChange={({ target }) => handleChange('amount', target.value)}
                label={'Amount'}
                type={'number'}
            />
            <Input
                value={income.date}
                onChange={({ target }) => handleChange('date', target.value)}
                label={'Date'}
                type={'date'}
            />
            <div className="flex justify-end mt-6">
                <button
                    className="add-btn-fill add-btn"
                    type="button"
                    onClick={() => onAddExpense(income)}
                >
                    Add expense
                </button>
            </div>
        </div>
    );
};

export default AddExpenseForm;
