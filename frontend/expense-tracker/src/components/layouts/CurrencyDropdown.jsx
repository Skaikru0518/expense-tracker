import React, { useState } from 'react';

const CurrencyDropdown = () => {
    const [currency, setCurrency] = useState('USD');
    const handleChangeCurrency = (e) => {
        setCurrency(e.target.value);
    };
    return (
        <div className="flex items-center gap-6">
            <label htmlFor="currency"></label>
            <select
                id="currency"
                onChange={handleChangeCurrency}
                className="border rounded-xl p-0.5 border-primary"
            >
                <option value={'USD'}>USD</option>
                <option value={'HUF'}>HUF</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;
