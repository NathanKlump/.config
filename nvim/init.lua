-- Setup basics
vim.opt.number = true
vim.opt.clipboard = "unnamedplus"

-- Map Ctrl+Shift+Right Arrow to select from cursor to left/right of word
vim.api.nvim_set_keymap('n', '<C-S-Right>', 'vE', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', '<C-S-Right>', 'e', { noremap = true, silent = true })
vim.api.nvim_set_keymap('i', '<C-S-Right>', '<Esc>vE', { noremap = true, silent = true })

vim.api.nvim_set_keymap('n', '<C-S-Left>', 'vB', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', '<C-S-Left>', 'b', { noremap = true, silent = true })
vim.api.nvim_set_keymap('i', '<C-S-Left>', '<Esc>vB', { noremap = true, silent = true })

-- Map Ctrl+Shift+Up/Down Arrow to select from current to bottom/top
vim.api.nvim_set_keymap('n', '<C-S-Down>', '<C-Down>', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', '<C-S-Down>', '<C-Down>', { noremap = true, silent = true })
vim.api.nvim_set_keymap('i', '<C-S-Down>', '<Esc><C-Down>', { noremap = true, silent = true })

vim.api.nvim_set_keymap('n', '<C-S-Up>', '<C-Up>', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', '<C-S-Up>', '<C-Up>', { noremap = true, silent = true })
vim.api.nvim_set_keymap('i', '<C-S-Up>', '<Esc><C-Up>', { noremap = true, silent = true })

-- Bind d to Backspace in normal, insert, and visual modes
vim.api.nvim_set_keymap('n', '<BS>', 'd', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', '<BS>', 'd', { noremap = true, silent = true })

-- Map Ctrl + X to copy the current line and delete it
vim.api.nvim_set_keymap('n', '<C-x>', 'yydd', { noremap = true, silent = true })
vim.api.nvim_set_keymap('i', '<C-x>', '<Esc>yydd', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', '<C-x>', '<Esc>yydd', { noremap = true, silent = true })

-- Undo and redo actions
vim.api.nvim_set_keymap('n', '<C-z>', 'u', { noremap = true, silent = true })
vim.api.nvim_set_keymap('i', '<C-z>', '<Esc>u', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', '<C-z>', '<Esc>u', { noremap = true, silent = true })

vim.api.nvim_set_keymap('n', '<C-y>', '<C-r>', { noremap = true, silent = true })
vim.api.nvim_set_keymap('i', '<C-y>', '<Esc><C-r>', { noremap = true, silent = true })
vim.api.nvim_set_keymap('v', '<C-y>', '<Esc><C-r>', { noremap = true, silent = true })

-- CTRL + A select the whole page
vim.api.nvim_set_keymap('n', '<C-a>', 'ggVG', { noremap = true, silent = true })
