<template>
    <div>
        <h3>บันทึกรายรับรายจ่าย</h3>
        <div class="outer">
            <ledger-create-form></ledger-create-form>
            <ledger-table></ledger-table>
        </div>
    </div>
</template>

<script>
import LedgerTable from '@/components/LedgerTable'
import LedgerCreateForm from '@/components/LedgerCreateForm'

export default {
    components: {
        LedgerCreateForm,
        LedgerTable
    }
}
</script>

<style scoped>
    .outer {
        display: flex;
        justify-content: space-between;
    }
</style>