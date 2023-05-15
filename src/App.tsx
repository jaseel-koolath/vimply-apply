import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Footer from './components/Footer'
import {
  Button,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent,
} from '@mui/material'
import Output from './components/Output'
import { useState } from 'react'
import functions from './functions'

export default function App() {
  const [csv, setCsv] = useState('')
  const [fun, setFun] = useState('cube')

  const handleFun = (event: SelectChangeEvent) => {
    setFun(event.target.value)
  }
  console.log(functions)

  return (
    <Box
      sx={{
        backgroundImage: 'url(/public/vimal.png)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Box
          sx={{ my: 4, gap: 2 }}
          display={'flex'}
          width={'80vw'}
          height={'75vh'}
          gap={1}
        >
          <TextField
            id="outlined-multiline-flexible"
            placeholder="Paste your CSV here"
            multiline
            fullWidth
            rows={20}
            sx={{ overflow: 'auto', height: '100%' }}
            value={csv}
            onChange={(e) => setCsv(e.target.value)}
          />
          <Box
            sx={{
              alignSelf: 'flex-start',
              display: 'flex',
              gap: 2,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Select
              id="demo-select-small"
              value={fun}
              onChange={handleFun}
              size="small"
            >
              {Object.entries(functions).map(([key, value]) => (
                <MenuItem value={key} key={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                navigator.clipboard.writeText(
                  csv
                    .split(',')
                    .map((value) => functions[fun](value.trim()))
                    .join(',')
                )
              }}
              disabled={csv === ''}
            >
              <img
                src="/public/vimal.png"
                alt="copy"
                height="30px"
                width="30px"
              />
              Copy Result
            </Button>
          </Box>

          {/* Table  to display the output csv */}
          <Output
            data={
              csv
                .split(',')
                .map((value) => functions[fun](value.trim())) as string[]
            }
          />
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
