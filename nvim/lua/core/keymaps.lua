-- set leader key to space
vim.g.mapleader = " "
vim.keymap.set({ "n", "x" }, "<leader>c", [["+y]]) -- copy to system clipboard

-- select all text on page
vim.keymap.set({ "n", "x" }, "<C-a>", function()
    vim.api.nvim_command('normal! ggVG')
end) 

-- copies and deletes the current line
vim.keymap.set({'n', 'i'}, '<C-x>', function()
    local mode = vim.api.nvim_get_mode().mode
    if mode == 'i' then
        vim.api.nvim_command('stopinsert')
    end
    vim.api.nvim_command('normal! yy')
    vim.api.nvim_command('normal! "_dd')
end)


