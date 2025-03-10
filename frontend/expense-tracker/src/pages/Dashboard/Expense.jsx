import React, { useState, useEffect } from 'react';
import { useUserAuth } from '../../hooks/useUserAuth';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';
import axiosInstance from '../../utils/axiosinstance';
import ExpenseOverview from '../../components/Expense/ExpenseOverview';
import Modal from '../../components/Modal';
import AddExpenseForm from '../../components/Expense/AddExpenseForm';
import ExpenseList from '../../components/Expense/ExpenseList';
import DeleteAlert from '../../components/DeleteAlert';

const Expense = () => {
    useUserAuth();
    const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);
    const [expenseData, setExpenseData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState({
        show: false,
        data: null,
    });

    // Get All Expense Details
    const fetchExpenseDetails = async () => {
        if (loading) {
            setLoading(true);
        }
        try {
            const response = await axiosInstance.get(
                `${API_PATHS.EXPENSE.GET_ALL_EXPENSE}`,
            );
            if (response.data) {
                setExpenseData(response.data);
            }
        } catch (error) {
            console.log('Something went wrong fething expense.', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle add expense
    const handleAddExpense = async (expense) => {
        const { category, amount, date, icon } = expense;

        //Validation checks
        if (!category.trim()) {
            toast.error('Category is required');
            return;
        }

        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            toast.error('Amount should be a valid number greater than 0.');

            return;
        }

        if (!date) {
            toast.error('Date is required');
            return;
        }
        if (!icon) {
            toast.error('Please choose an icon.');
        }

        try {
            await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, {
                category,
                amount,
                date,
                icon,
            });
            setOpenAddExpenseModal(false);
            toast.success('Expense added successfully');
            fetchExpenseDetails();
        } catch (error) {
            console.error(
                'Error adding expense',
                error.response?.data?.message || error.message,
            );
        }
    };

    // Delete expense
    const deleteExpense = async (id) => {
        try {
            await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id));
            setOpenDeleteAlert({ show: false, data: null });
            toast.success('Expense detils deleted successfully');
            fetchExpenseDetails();
        } catch (error) {
            console.error(
                'Error deleting expense detail',
                error.response?.data?.message || error.message,
            );
        }
    };

    const handleDownloadExpenseDetails = async () => {
        try {
            const response = await axiosInstance.get(
                API_PATHS.EXPENSE.DOWNLOAD_EXPENSE,
                {
                    responseType: 'blob',
                },
            );

            // Create a URL for the blob file
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'expense_details.xlsx');
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);

            toast.success('Download success!');
        } catch (error) {
            console.log('Error downloading expense details:', error);
            toast.error('Error downloading expense details. Please try again!');
        }
    };

    useEffect(() => {
        fetchExpenseDetails();

        return () => {};
    }, []);

    return (
        <DashboardLayout activeMenu={'Expense'}>
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    <div className="">
                        <ExpenseOverview
                            transactions={expenseData}
                            onExpenseIncome={() => setOpenAddExpenseModal(true)}
                        />
                    </div>
                    <ExpenseList
                        transactions={expenseData}
                        onDelete={(id) => {
                            setOpenDeleteAlert({ show: true, data: id });
                        }}
                        onDownload={handleDownloadExpenseDetails}
                    />
                </div>
                <Modal
                    isOpen={openAddExpenseModal}
                    onClose={() => setOpenAddExpenseModal(false)}
                    title={'Add expense'}
                >
                    <AddExpenseForm onAddExpense={handleAddExpense} />
                </Modal>

                <Modal
                    isOpen={openDeleteAlert.show}
                    onClose={() =>
                        setOpenDeleteAlert({ show: false, data: null })
                    }
                    title={'Delete Expense'}
                >
                    <DeleteAlert
                        content="Are you sure you want to delete this expense detail?"
                        onDelete={() => deleteExpense(openDeleteAlert.data)}
                    />
                </Modal>
            </div>
        </DashboardLayout>
    );
};

export default Expense;
