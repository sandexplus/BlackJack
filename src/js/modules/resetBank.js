function resetBank(resetBankSelector, bankSelector) {
    const resetBankBtn = document.querySelector(resetBankSelector);

    resetBankBtn.addEventListener('click', () => {


        const bank = document.querySelector(bankSelector);

        localStorage.setItem('bank', 1000);
        bank.textContent = `Your bank: ${localStorage.getItem('bank')}$`;
    });
}

export { resetBank };